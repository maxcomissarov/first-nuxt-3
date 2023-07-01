export const useCart = () => useState(() => []);

export const useAuth = () => useState(() => ({
    isAuthenticated: false
}));

export const useVisitCount = () => useState(() => 0);