# Design

I've created reusable components wherever I could. This helps with maintainability and scalability: theoretically these components could be implemented within multiple projects, and the design would be consistent. (If doing this, I would create a custom component library using something like Storybook.)

It would be useful to use design tokens to store things like hex codes. That way, we would only have to update them in one place if there are design changes. Design tokens are also helpful when it comes to implementing themes (dark mode/light mode, etc.).

# Other changes

The search function isn't currently scalable. I would like to add a dropdown with state options, then a dropdown with city options. That would narrow down a user's search. Alternatively, if we had the user's state, we could only show advocates in that state and then provide them with a city dropdown.

I'd like to add pagination to the table, and an ascending/descending sort button for each field.

# UX

I prefer to build components on top of existing component libraries such as MUI. This speeds up development time by adding features like pagination out of the box.

# Data

If making calls to lots of different tables/APIs, it would be best to set up a more robust pattern for fetching data. This could involve useSWR() and GraphQL.

# Testing

I would set up Jest and have a test for each file, aiming for at least 85% code coverage.
