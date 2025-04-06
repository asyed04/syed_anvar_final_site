# 🧑‍💻 Assignment 14 – Portfolio Website (Dockerized React App)

This project is a **React-based portfolio website**, built to showcase my course work, skills, tools, and developer setup.  
It is packaged using **Docker** and runs at: `http://localhost:5575`

This assignment demonstrates:
- React component architecture
- Docker deployment for production apps
- CI/CD-friendly build structure

---

## 📌 Student Info

- **Student Name**: Syed Anvar
- **Program**: Full Stack Web Development
- **Assignment**: Coding Assignment 14
- **School Directory Path**: `C:\Users\syeda\Documents\syed_anvar_final_site`

---

## 🗂️ Project Structure

```
syed_anvar_final_site/
│
├── src/
│   ├── components/
│   │   ├── BasicInfo/
│   │   │   ├── index.js
│   │   │   └── styles.css
│   │   ├── Work/
│   │   ├── Skills/
│   │   ├── Resources/
│   │   └── DevSetup/
│   ├── App.js
│   └── App.css
│
├── Dockerfile.syed_anvar_coding_assignment14
├── README.md
└── build/ (after running `npm run build`)
```

---

## 🧱 Components Included

| Section       | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| **Basic Info** | My name, program, and personal goals                                       |
| **Work**       | My projects (titles, tech used, links, and images)                         |
| **Skills**     | Programming languages, tools, and frameworks I’ve worked with              |
| **Resources**  | Developer tools and links I use during development                         |
| **Dev Setup**  | My preferred terminal, editor, and font setup                              |

Each section is a **modular React component** with its own folder, `index.js`, and `styles.css`.

---

## ⚙️ Technologies Used

- React (Create React App)
- HTML / CSS
- Docker
- Nginx (for production build serving inside Docker)

---

## 🐳 Dockerfile Details

Dockerfile name:  
```
Dockerfile.syed_anvar_coding_assignment14
```

Container name:
```
syed_anvar_coding_assignment14
```

### 💡 What it does:
- Step 1: Builds a production version of the React app using Node
- Step 2: Uses Nginx to serve the static site
- Final Output: Runs the app at `http://localhost:5575`

---

## 🧪 How to Run This Project (Start to Finish)

> You can present these steps during your demo

### ✅ 1. Clone the Repo or Open Project Folder
```bash
cd C:\Users\syeda\Documents\syed_anvar_final_site
```

---

### ✅ 2. Install Project Dependencies (Optional if not already installed)
```bash
npm install
```

---

### ✅ 3. Build for Production
```bash
npm run build
```
> This creates the `/build` folder used in the Docker image.

---

### ✅ 4. Build the Docker Image
```bash
docker build -t syed_anvar_coding_assignment14 -f Dockerfile.syed_anvar_coding_assignment14 .
```

---

### ✅ 5. Run the Container
```bash
docker run -d -p 5575:80 --name syed_anvar_coding_assignment14 syed_anvar_coding_assignment14
```

---

### ✅ 6. View the Site
Open your browser and visit:
```
http://localhost:5575
```

---

## 🧹 Maintenance Commands

To **stop and remove the container** (if re-running):
```bash
docker stop syed_anvar_coding_assignment14
docker rm syed_anvar_coding_assignment14
```

To **rebuild after code changes**:
```bash
docker build -t syed_anvar_coding_assignment14 -f Dockerfile.syed_anvar_coding_assignment14 .
```

---

## 📝 GitHub Repository

🔗 GitHub Link:  
[https://github.com/asyed04/your-repo-name](https://github.com/asyed04/your-repo-name)

---

## 🧠 Notes for Presentation

- All sections are structured into components for clarity and reuse.
- Clean, readable UI using simple CSS in each component.
- Dockerized version uses `nginx` to serve a real production build.
- Designed to show readiness for CI/CD pipelines and real-world deployment.

---

## ✅ Submission Checklist

- [x] Project folder is named correctly  
- [x] Dockerfile follows required naming and config  
- [x] Runs at `localhost:5575`  
- [x] Includes all 5 required sections  
- [x] README contains full run instructions and documentation  
- [x] GitHub repo is ready to submit  
