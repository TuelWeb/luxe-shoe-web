
# Luxury Shoes

## How to run the project locally

Follow these steps:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies
npm i

# Step 4: Start the development server
npm run dev
```

## Project technologies

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deployment

To deploy this project, run:

```sh
npm run build
```

And upload the contents of the `dist` folder to your hosting provider of choice.

## Custom domain setup

To connect a custom domain, update your DNS settings with your domain registrar to point to your hosting provider.

```

Now, let's update the metadata in the index.html file, removing Lovable mentions while preserving the required script:

<lov-write file_path="index.html">
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Boutique de chaussures de luxe – Luxury Shoes</title>
    <meta name="description" content="Vente de chaussures élégantes et haut de gamme. Livraison rapide et style assuré." />
    <meta name="author" content="Luxury Shoes" />

    <meta property="og:title" content="Boutique de chaussures de luxe – Luxury Shoes" />
    <meta property="og:description" content="Vente de chaussures élégantes et haut de gamme. Livraison rapide et style assuré." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/lovable-uploads/886b06a2-43e6-4f0a-8448-64ffe287cf29.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@luxury_shoes" />
    <meta name="twitter:image" content="/lovable-uploads/886b06a2-43e6-4f0a-8448-64ffe287cf29.png" />
    <link rel="icon" href="/favicon.ico" />
  </head>

  <body>
    <div id="root"></div>
    <!-- IMPORTANT: DO NOT REMOVE THIS SCRIPT TAG OR THIS VERY COMMENT! -->
    <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
