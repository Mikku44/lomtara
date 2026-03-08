import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/main_layout.tsx",
        [
            index("routes/home.tsx"),
            route("daytrip", "routes/daytrip.tsx"),
            route("destination", "routes/destination.tsx"),
            route("contact", "routes/contact.tsx"),
            route("book", "routes/book.tsx"),
        ]
    ),
] satisfies RouteConfig;
