// tests/unit.setup.ts
import { config } from "@vue/test-utils";

config.global.mocks = {
    $t: (tKey) => tKey, // just return translation key
};
