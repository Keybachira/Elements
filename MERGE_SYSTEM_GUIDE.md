# Sistema de Merge de Gramática - Guia de Uso

## Problema Anterior
Cada ficheiro de língua tinha **300+ linhas** de código duplicado. Quando queríamos adicionar uma nova biblioteca ou melhorar a gramática, tínhamos que editar **80+ ficheiros**. ❌

## Solução: Merge System

### Como Funciona

```
grammar.base.ts (Master Template)
        ↓
    mergeGrammar()
        ↓
    + Traduções específicas da língua
        ↓
Ficheiro completo da língua
```

### 3 Componentes Principais

#### 1. **`grammar.base.ts`** (Master Template)
Contém a estrutura universal:
- Todas as bibliotecas (math, string, file, http, etc.)
- Todos os tipos de dados
- Todos os métodos e estruturas de controlo
- Todos os modificadores de acesso
- Todas as mensagens de erro

**Atualizar aqui = Todas as línguas herdam automaticamente ✅**

#### 2. **`grammar.merge.ts`** (Sistema de Merge)
Função `mergeGrammar()` que:
- Combina `BASE_GRAMMAR` com traduções específicas
- Faz deep merge recursivo
- Permite override de partes específicas

#### 3. **`grammars/[language].ts`** (Ficheiro da Língua)
Agora apenas contém:
```typescript
import { mergeGrammar } from "../grammar.merge.js";

export const english = new Language(
  mergeGrammar({
    language: "english",
    about: "Descrição da linguagem",
    include: { main: "include", __description: "..." },
    // Traduções específicas do English (opcional)
  })
);
```

## Exemplo de Uso

### Antes (Problemático)
```typescript
// arquivo: english.ts (300+ linhas)
const __math = {
  main: DocStr("math", "..."),
  __pi: DocStr("PI", "..."),
  __sqrt: DocStr("Sqrt", "..."),
  // ... + 50 mais funções
};

// arquivo: portugues.ts (300+ linhas - DUPLICADO!)
const __math = {
  main: DocStr("math", "..."),
  __pi: DocStr("PI", "..."),
  __sqrt: DocStr("Sqrt", "..."),
  // ... + 50 mais funções - IDÊNTICO!
};

// arquivo: francais.ts (300+ linhas - DUPLICADO!)
const __math = {
  main: DocStr("math", "..."),
  // ... TUDO REPETIDO!
};
```

### Depois (Otimizado)
```typescript
// arquivo: grammar.base.ts (Master)
export const BASE_GRAMMAR = {
  library: {
    __math: {
      main: DocStr("math", "..."),
      __pi: DocStr("PI", "..."),
      // ... definido UMA VEZ
    }
  }
};

// arquivo: english.ts (50 linhas)
export const english = new Language(
  mergeGrammar({
    language: "english",
    about: "...",
    include: { main: "include", __description: "..." }
  })
);

// arquivo: portugues.ts (50 linhas)
export const portugues = new Language(
  mergeGrammar({
    language: "português",
    about: "...",
    include: { main: "incluir", __description: "..." }
  })
);
```

## Passos para Implementar

### 1. Migrar Ficheiros de Língua
Para cada ficheiro em `grammars/`, fazer:

```typescript
// ANTES
import { Language } from "../grammar.class.js";
import { DocStr, errorMessage } from "../utils/stucture.grammar.js";

export const english = new Language({
  language: "english",
  about: "...",
  include: DocStr("include", "..."),
  commands: { __about: DocStr(...), ... },  // ← 300+ linhas
  library: { __math: { ... }, ... },
  types: { ... },
  // ... tudo aqui
});

// DEPOIS
import { Language } from "../grammar.class.js";
import { mergeGrammar } from "../grammar.merge.js";
import { DocStr } from "../utils/stucture.grammar.js";

export const english = new Language(
  mergeGrammar({
    language: "english",
    about: "...",
    include: DocStr("include", "..."),
    // Only if you need to override something specific
  })
);
```

### 2. Adicionar Novas Melhorias
Agora é tão fácil quanto:

```typescript
// 1. Atualizar grammar.base.ts
export const BASE_GRAMMAR = {
  library: {
    __newLibrary: {  // ← Nova biblioteca
      main: DocStr("newLib", "..."),
      __method1: DocStr("Method1", "..."),
    }
  }
};

// 2. Pronto! ✅ Todas as 80+ línguas automaticamente herdam isto!
```

## Overriding (Para casos especiais)

Se uma língua precisa de uma palavra-chave diferente:

```typescript
export const portugues = new Language(
  mergeGrammar({
    language: "português",
    about: "...",
    include: { main: "incluir", __description: "..." },
    
    // Override apenas o que é diferente
    library: {
      __string: {
        main: DocStr("texto", "para aceder a funções de manipulação de texto"),
        // __length, __toUpperCase, etc. herdam da base
      }
    }
  })
);
```

## Benefícios

| Antes | Depois |
|-------|--------|
| 300+ linhas por língua | 50 linhas por língua |
| Atualizar 80+ ficheiros | Atualizar 1 ficheiro |
| ❌ Inconsistências fáceis | ✅ Tudo sincronizado |
| ❌ Código duplicado | ✅ DRY (Don't Repeat Yourself) |
| Difícil adicionar features | Fácil adicionar features |

## Verificação

Para verificar se tudo está funcionando:

```bash
npm run dev
# Deve compilar sem erros e mostrar a gramática do English
```

## Próximos Passos

1. ✅ Criar `grammar.base.ts` (FEITO)
2. ✅ Criar `grammar.merge.ts` (FEITO)
3. ⏳ Migrar todos os ficheiros de língua para usar `mergeGrammar()`
4. ⏳ Testar que todas as línguas herdam corretamente
5. ⏳ Documentar qualquer override específico da língua

---

**Resultado Final**: Um sistema escalável onde **melhorias globais = 1 mudança = 80+ línguas atualizadas automaticamente** 🚀
