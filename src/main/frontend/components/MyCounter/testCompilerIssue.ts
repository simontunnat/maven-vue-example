import {Counter} from "./Counter";

export function testCompilerIssue(): Counter | {} {
    return {};
}

// This will not be reported by ESLint but will fail the ts compiler in both dev and production mode
testCompilerIssue().count
