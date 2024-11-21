import { Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function UserList() {
  const users = [
    { id: 1, name: "alma" },
    { id: 2, name: "korte" },
    { id: 3, name: "citrom" },
  ];
  const navigate = useNavigate();

  return (
    <>
      {users.map((user) => {
        return (
          <Chip
            variant="outlined"
            key={user.id}
            label={user.name}
            onClick={() => {
              navigate(`/user/${user.id}`);
            }}
          />
        );
      })}
    </>
  );
}
