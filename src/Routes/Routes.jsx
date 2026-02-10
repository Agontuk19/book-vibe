import React from 'react';
import { createHashRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import BookDetails from '../pages/BookDetails/BookDetails';

const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path: "/",
            Component: Home
        },
        {
            path: '/bookDetails/:id',
            loader: () => fetch('/booksData.json'),
            Component: BookDetails
        }
    ]
  },
]);

export default router;