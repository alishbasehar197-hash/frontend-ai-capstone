# Accessibility Notes

## Hand-Built Components vs shadcn/ui

I first built the Modal Dialog, Tabs, and Disclosure components manually
using React and TypeScript. After that, I installed shadcn/ui and reviewed
the generated Dialog and Tabs source code.

### 1. Dialog Focus Management

In my hand-built Modal, I had to manually implement focus management.

I saved the element that was focused before opening the modal, moved focus
inside the modal, trapped Tab and Shift+Tab inside the dialog, handled the
Escape key, and returned focus to the original element when the modal closed.

The shadcn Dialog is built on top of Base UI's Dialog primitive. The
generated component delegates the dialog behavior to the primitive instead
of requiring me to manually implement all of the focus-management behavior.

### 2. Dialog Accessibility Structure

In my hand-built Modal, I had to manually add:

- `role="dialog"`
- `aria-modal="true"`
- `aria-labelledby`
- A close button
- Keyboard handling for Escape

The generated shadcn Dialog provides a structured API with components such
as `Dialog`, `DialogTrigger`, `DialogContent`, `DialogClose`,
`DialogTitle`, and `DialogDescription`.

This makes it easier to build a consistent accessible dialog without
managing all of the dialog behavior in one component.

### 3. Tabs Keyboard Interaction

In my hand-built Tabs component, I manually implemented:

- Left Arrow
- Right Arrow
- Home
- End
- Roving `tabIndex`
- Focus movement between tabs
- `aria-selected`
- `aria-controls`
- Tab and tab-panel relationships

The generated shadcn Tabs uses Base UI's Tabs primitive. The primitive
handles the underlying tab behavior, while the generated components provide
a reusable structure such as `Tabs`, `TabsList`, `TabsTrigger`, and
`TabsContent`.

### 4. Reusable Styling and Variants

My hand-built components contain their styling directly in the component
classes.

The generated shadcn Tabs uses `class-variance-authority` for reusable
variants and a `cn` helper for combining classes. For example, the Tabs
List supports different variants such as `default` and `line`.

This makes the generated component easier to customize and reuse across
different parts of an application.

## What I Learned

Building the components manually helped me understand the accessibility
requirements instead of treating accessibility as something that happens
automatically.

The shadcn generated source showed me that accessible behavior can be
provided through well-tested primitives while still keeping the component
source available for developers to inspect and customize.