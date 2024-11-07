// import roles from "../data/roles.json";


// interface IRole {
//   role: string;
// }

// interface IuseActivityParams {
//   activity: string;
//   role: string | IRole; 
//   activities: string[];
// }

// const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
//   const roleValue = typeof role === 'object' && role !== null ? role.role : role;

//   const activityIndex = activities.indexOf(activity);
//   if (activityIndex === -1) {
//     console.log("Invalid activity:", activity);
//     return false;
//   }

//   const roleIndex = roles.indexOf(roleValue);
//   if (roleIndex === -1) {
//     console.log("Invalid role:", roleValue);
//     return false;
//   }

//   return roleIndex >= activityIndex;
// };

// export default useIsVerified;




import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  //FILL HERE 3.7
    const roleIndex = roles.indexOf(role);
    const activityIndex = activities.indexOf(activity);
    return roleIndex >= activityIndex;  
};

export default useIsVerified;
