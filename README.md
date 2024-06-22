# Node + TS + Testing with jest

Pasos para configurar Jest con TypeScript, en Node.

## Instalationes

### Instalaciones de desarrollo (super test es útil para probar Express)

```bash
npm install -D jest @types/jest ts-jest supertest
```

### Crear archivo de configuración de Jest

```bash
npx jest --init
```

### En el archivo jest.config.js configurar

```javascript
preset: 'ts-jest',
testEnvironment: "jest-environment-node",

// Opcional - The paths to modules that run some code to configure or set up the testing environment before each test
// setupFiles: ['dotenv/config'],
```

### Crear scripts en el package.json

```javascript
"test": "jest",
"test:watch": "jest --watch",
"test:coverage": "jest --coverage",
```