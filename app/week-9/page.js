"use client"

// Import necessary hooks and components
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Define a login function
  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // Define a logout function
  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md text-center bg-white">
        {user ? (
          <div>
            <p className="text-lg font-semibold text-cyan-400 mb-4">
              Welcome, {user.displayName} ({user.email})
            </p>
            <button 
              onClick={handleLogout} 
              className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition mb-4"
            >
              Logout
            </button>
            <Link className="text-blue-500 hover:text-blue-600 transition underline" href="/week-9/shopping-list">
                Go to Shopping List
              
            </Link>
          </div>
        ) : (
          <button 
            onClick={handleLogin} 
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Login with GitHub
          </button>
        )}
      </div>
    </div>
  );
}
