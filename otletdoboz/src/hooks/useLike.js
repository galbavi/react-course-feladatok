import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { AXIOS_METHOD, doApiCall } from "./useApi";
import { MODALS, useModals } from "./useModal";

function getLikedIdsFromSessionUser(sessionUser) {
    if (!sessionUser.liked) {
        return []
    }

    return sessionUser.liked.map(like => like.id)
}

export function useLike(suggestionId) {
    const {authToken, sessionUser, setSessionUser } = useAuth();
    const likedIds = getLikedIdsFromSessionUser(sessionUser);
    const currentLiked = likedIds.includes(suggestionId);
    const [isLiked, setIsLiked] = useState(currentLiked);
    const { showModal} = useModals();

    useEffect(() => {
        setIsLiked(currentLiked)
    }, [suggestionId, currentLiked])

    const onLikeChange = () => {
        if (authToken === false) {
            showModal(MODALS.LOGIN);
            return;
        }
        doApiCall(AXIOS_METHOD.POST, isLiked ? '/unlike' : '/like', (newUserData) =>{
            setSessionUser(newUserData);
        }, () => {
            setIsLiked(isLiked);
        }, { id: suggestionId });
        setIsLiked(oldLiked => !oldLiked);
    }

    return [onLikeChange, isLiked]
}