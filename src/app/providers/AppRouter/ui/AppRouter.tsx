import {Route, Routes} from "react-router-dom";
import {routeConfig} from "app/providers/AppRouter/config/routeConfig.tsx";

export const AppRouter = () => {
    return (
            <div>
                <Routes>
                    {Object.values(routeConfig).map((route) =>
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                        />)}
                </Routes>
            </div>
        );
    }

