import test from "node:test";
import assert from "node:assert/strict";
import { resolveFirebaseConfig } from "../app/lib/firebase-config.mjs";

test("remote builds without local env retain the MONO/DEV Web configuration", () => {
  const config = resolveFirebaseConfig({});
  assert.equal(config.projectId, "mono-b5784");
  for (const value of Object.values(config)) assert.ok(value);
  assert.deepEqual(resolveFirebaseConfig({ VITE_FIREBASE_API_KEY: "  " }), config);
});

test("alternate projects never inherit production credentials or resources", () => {
  const config = resolveFirebaseConfig({ VITE_FIREBASE_PROJECT_ID: "demo-monodev" });
  assert.equal(config.projectId, "demo-monodev");
  assert.equal(config.apiKey, undefined);
  assert.equal(config.storageBucket, undefined);
  const overridden = resolveFirebaseConfig({
    VITE_FIREBASE_PROJECT_ID: "demo-monodev",
    VITE_FIREBASE_API_KEY: " emulator-key ",
    VITE_FIREBASE_AUTH_DOMAIN: "demo-monodev.firebaseapp.com",
    VITE_FIREBASE_STORAGE_BUCKET: "demo-monodev.appspot.com",
    VITE_FIREBASE_MESSAGING_SENDER_ID: "123",
    VITE_FIREBASE_APP_ID: "1:123:web:emulator",
  });
  assert.equal(overridden.apiKey, "emulator-key");
  assert.equal(overridden.messagingSenderId, "123");
  assert.ok(Object.values(overridden).every(Boolean));
});
