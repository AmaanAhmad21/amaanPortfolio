# Push amaanPortfolio to GitHub

Run these in **Git Bash** from the project folder. If `git status` works, skip step 1.

---

## 1. Fix or init Git (only if needed)

If you get `fatal: not a git repository` or errors about `.git`:

- Close Cursor (or any app using this folder), then in Git Bash:

```bash
cd "/d/Random Coding/amaanPortfolio"

# Remove broken .git (if it exists)
rm -rf .git

# Start fresh
git init -b main
```

---

## 2. First commit

```bash
cd "/d/Random Coding/amaanPortfolio"

git add .
git status   # check: node_modules and .next should NOT appear (they're in .gitignore)
git commit -m "Initial commit: Next.js portfolio"
```

---

## 3. Create the repo on GitHub

1. Go to [github.com/new](https://github.com/new)
2. **Repository name:** `amaanPortfolio` (or any name you like)
3. **Public**
4. Do **not** check "Add a README" (you already have one)
5. Click **Create repository**

---

## 4. Connect and push

GitHub will show commands. Use these (replace `YOUR_USERNAME` with your GitHub username):

```bash
cd "/d/Random Coding/amaanPortfolio"

git remote add origin https://github.com/YOUR_USERNAME/amaanPortfolio.git
git push -u origin main
```

If your repo is under an org: `https://github.com/ORG_NAME/amaanPortfolio.git`

---

## 5. SSH instead of HTTPS (optional)

If you use SSH keys:

```bash
git remote add origin git@github.com:YOUR_USERNAME/amaanPortfolio.git
git push -u origin main
```

---

## After the first push

Later, to push new work:

```bash
git add .
git commit -m "Describe your changes"
git push
```
