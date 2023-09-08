import type {Counter} from "./Counter";

export function testCompilerIssue(): Counter | object {
    return {};
}

// This will NOT be reported by ESLint
// This WILL be reported by the ts-loader in dev mode
// This WILL be reported by the ts-loader in production mode
// This WILL be reported by vue-tsc
// testCompilerIssue().count;
