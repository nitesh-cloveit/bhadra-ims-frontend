function Register() {
  // const [organizationId, setOrganizationId] = useState(null);
  return (
    <div>
      <h1>Register</h1>
      {/* 1st Step */}
      {/* 
      Create a new Organization
      Form Fields:
      - Name - text input
      - OrganizationType: retail or wholesale - Radio || Select
      - address - text input
      - phone - text input 

      Method:
      - handleCreateOrganization - POST /organization
        - Request Body: { name, organizationType, address, phone }
        - onSuccess: navigate to register page e.g navigate('/register', { state: { organizationId: response.data.id } })
      
      */}

       {/*
        2nd Step
        Register as user 
        import { useLocation } from "react-router";
        const { state } = useLocation();
        const organizationId = state.organizationId;
      */}

      <div>
        <form></form>
      </div>
    </div>
  );
}