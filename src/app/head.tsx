// app/head.tsx
export default function Head() {
  return (
    <>
      <title>Tangent Weekly - Breaking News, Politics & Business Analysis</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link
        rel="preload"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        as="style"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-RG0dwy9AYKBy29aHgLTJUOMzVrTP2mvLPjyXNN6Y9+epcSmxJ0SuxTn+uc9XImYX"
        crossOrigin="anonymous"
        media="all"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YkFQnZ3k+qzGp5ZztU1eeQq+P6YvPvwV1ixsOfcD6GBSXMwLJtYQqE+Y4uOyfrsn"
        crossOrigin="anonymous"
        defer
      ></script>
      <link
        rel="preload"
        as="image"
        href="https://tangentweekly.com/images/wanda-vazquez-political-targeting.webp"
        fetchPriority="high"
        type="image/webp"
      />
    </>
  );
}
