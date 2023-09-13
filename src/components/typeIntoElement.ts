import user from "@testing-library/user-event";
export async function typeIntoElement(target: HTMLElement, value: string) {
  await user.type(target, value);
}
