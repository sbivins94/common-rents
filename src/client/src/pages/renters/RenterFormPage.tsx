import React, { useEffect, useState } from "react";
import DemographicForm from "../../components/DemographicForm";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import KindeUser from "../../types/KindeUser";

function RenterFormPage() {
  const [renter, setRenter] = useState<KindeUser>({
    given_name: null,
    family_name: null,
    email: null,
    id: null,
    picture: null,
  });
  const { getUser } = useKindeAuth();

  useEffect(() => {
    const renter: KindeUser = getUser();
    if (renter) {
      console.log("Renter logged in:", renter);
      setRenter(renter);
    } else {
      console.log("No user data available");
    }
  }, [getUser]);

  return (
    <div>
      <h2>
        Hi {renter.given_name ?? "there"}, tell us a little about yourself...
      </h2>
      <DemographicForm />
    </div>
  );
}

export default RenterFormPage;
