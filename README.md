# json-to-zod

A powerful tool for converting JSON objects and schemas into [Zod](https://github.com/colinhacks/zod) validation schemas for TypeScript. Simplify your workflow by effortlessly transforming raw JSON data into type-safe, runtime-validated models.

---

## 🚀 Features

- **Automatic Conversion**: Instantly convert JSON objects or schemas to Zod schema code.
- **Supports Complex Types**: Handles nested objects, arrays, enums, optionals, and more.
- **TypeScript Integration**: Output is fully compatible with TypeScript projects.
- **Customizable Output**: Supports code formatting and schema customization.
- **CLI & API**: Use as a command-line tool or import as a library in your projects.
- **Validation Preview**: Test your generated Zod schemas on sample data before exporting.
- **Extensible**: Easily add your own rules or transformations.

---

## 🛠️ Tech Stack

- **Language**: TypeScript, JavaScript
- **Libraries**: [Zod](https://github.com/colinhacks/zod)
- **Build Tools**: Node.js, npm/yarn
- **Testing**: Jest or Vitest (if applicable)
- **CLI**: Commander (for CLI interface)
- **Formatting**: Prettier, ESLint

---

## 📋 Prerequisites

Before running or developing with this project, ensure you have:

- [Node.js](https://nodejs.org/) >= 16.x
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- (Optional) [Git](https://git-scm.com/) for cloning the repository

---

## 🏃‍♂️ Run Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/malhotraarshdeepsingh/json-to-zod.git
   cd json-to-zod
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the tool**

   - **CLI Usage:**

     ```bash
     node cli.js input.json
     # or, if installed globally
     json-to-zod input.json
     ```

   - **Library Usage:**

     ```typescript
     import { convertJsonToZod } from 'json-to-zod';

     const zodSchema = convertJsonToZod(myJsonObject);
     ```

---

## 📸 Snaps

| JSON Input | Zod Output |
|:----------:|:----------:|
| ![image1](snaps/json-input.png) | ![image2](snaps/zod-output.png) |

*Sample screenshots of input and generated output.*

---

## 🤝 Contributing

Contributions are welcome!

- Fork the repo and create your branch (`git checkout -b feature/AmazingFeature`)
- Commit your changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

**Code Style:** Please follow the established code style and run lint/format commands before making a PR.

**Tests:** Add tests for new features or bug fixes.

---

## 🐞 Bug Reports

Found a bug? Please [open an issue](https://github.com/malhotraarshdeepsingh/json-to-zod/issues) with:

- Steps to reproduce
- Expected behavior
- Screenshots (if relevant)
- Environment details

We appreciate your help in making this tool better!

---

## 🙏 Acknowledgements

- [Zod](https://github.com/colinhacks/zod) for robust schema validation.
- [Commander](https://github.com/tj/commander.js) for CLI interface.
- [TypeScript](https://www.typescriptlang.org/) for type safety.
- All contributors and open source maintainers.

---

## 💡 Inspiration Sources

- [Quicktype](https://quicktype.io/) for type generation from JSON.
- [colinhacks/zod](https://github.com/colinhacks/zod)
- Community feedback and developer pain points around schema validation.

---

## 📞 Contact & Support

Have questions or need support?

- GitHub Issues: [json-to-zod/issues](https://github.com/malhotraarshdeepsingh/json-to-zod/issues)
- Email: [malhotraarshdeepsingh@gmail.com](mailto:malhotraarshdeepsingh@gmail.com)
- Follow me on [GitHub](https://github.com/malhotraarshdeepsingh)

---

## 🌟 Show Your Support

If you find this project helpful:

- ⭐ Star this repository on GitHub
- 🚀 Share with others
- 💬 Give feedback or suggest features

Thank you for using **json-to-zod**!

---
