// ============================================================================
// src/hooks/useAuth.ts
// Auth hook integrating with Fuse React authentication
// ============================================================================

import { useContext } from 'react';
import { AuthContext } from '@fuse/core/FuseAuthorization';

/**
 * useAuth - Hook to access Fuse React authentication state
 * 
 * Returns:
 * - user: Current user object with data and settings
 * - isAuthenticated: Boolean indicating if user is logged in
 * - signOut: Function to sign out the user
 * 
 * Usage:
 * ```tsx
 * const { user, isAuthenticated, signOut } = useAuth();
 * ```
 */
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthContext.Provider');
  }

  const { user } = context;
  
  // Check if user is authenticated
  const isAuthenticated = Boolean(user && user.role && user.role.length > 0);

  return {
    user,
    isAuthenticated,
    signOut: context.signOut,
  };
}

/**
 * Alternative: Direct import from Fuse if using their hook
 * 
 * If Fuse React provides a useAuth hook, use it instead:
 * 
 * ```tsx
 * export { useAuth } from '@fuse/core/FuseAuthorization';
 * ```
 * 
 * Or create a wrapper:
 * 
 * ```tsx
 * import { useAuth as useFuseAuth } from '@fuse/core/FuseAuthorization';
 * 
 * export function useAuth() {
 *   const auth = useFuseAuth();
 *   return {
 *     ...auth,
 *     isAuthenticated: Boolean(auth.user?.role?.length),
 *   };
 * }
 * ```
 */