# Next.js 15 Client-Side Environment Variable Access Error

This repository demonstrates a common error encountered in Next.js 15 applications when attempting to access environment variables within client-side code.  The `process.env` object is not available in the browser environment.

## Problem

Accessing `process.env` directly in a page component results in a runtime error because the browser environment doesn't have a `process` object.

## Solution

The correct approach is to use the `getStaticProps` or `getServerSideProps` functions to fetch environment variables during the build or request time, respectively, and pass the data as props to the page component.