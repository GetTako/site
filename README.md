# Tako Documentation Website

Welcome to the official repository for the **[Tako Framework](https://github.com/gettako/tako)** documentation website. 

This project (`gettako/site`) is built using [Nuxt](https://nuxt.com) and the [Docus Layer](https://docus.dev) to serve our official documentation at **[https://gettako.dev](https://gettako.dev)**.

## 📁 Repository Structure

We use a side-by-side repository architecture (without Git submodules):
- **`gettako/site`**: The main repository containing the web application, routing, and UI configurations.
- **`gettako/docs`**: The repository containing the actual markdown documentation files.

## 🚀 Quick Start

### 1. Clone the Site Repository

```bash
git clone git@github.com:gettako/site.git
cd site
```

### 2. Fetch the Documentation and Sync

We use a helper script to automatically clone or pull the `gettako/tako` and `gettako/docs` repositories into the root directory (`./tako` and `./docs`), and generate the API reference documentation.

```bash
./bin/tako sync
./bin/tako api:build
```

*(Note: You can use `./bin/tako all` to automatically sync, build the API docs, and build the Nuxt application in one step.)*

### 3. Install Dependencies

We use `bun` as our package manager. Ensure you have [Bun installed](https://bun.sh/docs/installation), then run:

```bash
bun install
```

### 4. Start Development Server

Run the development server with hot-module replacement:

```bash
bun run dev
```

Your site will be running at `http://localhost:3000`. Nuxt Content is configured to read markdown files directly from the `./docs` directory.

## 🛠️ Modifying Content

All documentation content is written in Markdown. Because the `docs` repository is cloned inside the `site` folder, you should make your content edits in the `./docs` directory. 

The Nuxt development server in `site` will automatically watch the `./docs` folder and reflect your changes in real-time.

## 🤝 Contributing

We welcome contributions! 
- If you are improving the website UI, configuration, or Vue components, submit Pull Requests to `github.com/gettako/site`.
- If you are fixing typos, adding cookbooks, or improving the documentation text, submit Pull Requests to `github.com/gettako/docs`.

Please ensure your changes align with the official Tako framework implementation.

## 📄 License

[MIT License](https://opensource.org/licenses/MIT)