import {Route, Routes} from "react-router-dom";
import {routeConfig} from "app/providers/AppRouter/config/routeConfig.tsx";
import {FC} from "react";

export const AppRouter:FC = () => {
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

