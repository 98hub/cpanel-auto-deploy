# 🚀 Next.js CI/CD Deployment to cPanel

This repository demonstrates a **fully automated CI/CD workflow** that deploys a **Next.js application** from GitHub directly to **cPanel** using SSH — fast, secure, and maintenance-free.

---

## ✨ Features

- 🔄 **Automatic Deployment** — Every push to the `main` branch triggers a build and deployment to your cPanel server.
- 🔐 **Secure SSH Connection** — Uses GitHub Secrets to safely manage credentials.
- ⚡ **Optimized Deployment** — Bundled as `.tar.gz` for faster file transfers.
- 🧱 **Complete Next.js Support** — Includes `.next`, `public`, and dependency management.
- 🧩 **Modular Configuration** — Uses environment secrets for flexible and reusable setup.

---

## 🧭 Workflow Overview

GitHub Actions workflow:  
📂 `.github/workflows/deploy.yml`

### Steps:

1. Checkout repository
2. Setup Node.js environment
3. Install dependencies with `npm ci`
4. Build Next.js production app (`npm run build`)
5. Compress build output into `build-output.tar.gz`
6. Upload to cPanel server via `appleboy/scp-action`
7. Extract and deploy automatically inside your server environment

---

## ⚙️ Environment Secrets

Add these in your GitHub repository → **Settings → Secrets → Actions**:

| Key                | Description                   |
| ------------------ | ----------------------------- |
| `SSH_HOST`         | Server hostname or IP         |
| `SSH_USER`         | SSH username                  |
| `SSH_PRIVATE_KEY`  | Private SSH key               |
| `SSH_PASSPHRASE`   | Optional key passphrase       |
| `DEPLOY_DIR`       | Target deployment path        |
| `NODE_MODULES_DIR` | Path to node_modules          |
| `NODE_ENV_PATH`    | Path to virtualenv activation |

---

## 🧰 Example Deployment Logs

- 🚀 Starting deployment inside Node.js environment...
- 🔧 Activating environment...
- 📦 Extracting build-output.tar.gz...
- ♻️ Restarting Node.js app...
- ✅ Deployment complete!

---

## 🛡️ Security Notes

- No credentials or private paths are hardcoded — everything is stored securely in GitHub Secrets.
- SSH key-based authentication only (no passwords).
- Each deployment runs in a clean, isolated environment.

---

## 💡 Why This Setup?

This setup offers a **production-grade CI/CD pipeline** that:

- Works natively with GitHub → cPanel without external runners
- Avoids manual FTP uploads or rebuilds
- Is fully version-controlled and reproducible

---

## 🧑‍💻 Author

**Sumberweb DevOps**  
Simplifying modern web deployment pipelines for cPanel and Node.js environments.

📫 [Contact or Support](support@sumberweb.com)

---

## 🏁 License

MIT License © 2025 — You’re free to use, modify, and adapt this workflow.

---

### ⭐ If this helped you, consider starring the repository!
