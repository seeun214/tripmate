// "use client";

// import { useState } from "react";

// import {
//   createClientComponentClient,
//   SessionContextProvider,
// } from "@supabase/auth-helpers-nextjs";

// interface SupabaseProviderProp {
//   children: React.ReactNode;
// }

// const SupabaseProvider: React.FC<SupabaseProviderProp> = ({ children }) => {
//   const [supabaseClient] = useState(() => createClientComponentClient());

//   return (
//     <SessionContextProvider supabaseClient={supabaseClient}>
//       {children}
//     </SessionContextProvider>
//   );
// };

// export default SupabaseProvider;
