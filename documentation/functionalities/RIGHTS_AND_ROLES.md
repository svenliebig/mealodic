# User Rights and Roles

This document describes the rights and roles for users of the application.

## Signup

Every user can signup for the application. The user will be asked to provide an email address and password. The email address will be used to verify the user's account and the password will be used to login to the application.

After login the user can choose an account name, this is purely cosmetic and will be shown to other users.

## Roles

There are two roles in the application:

- Admin
- User

## Permissions

The permissions for the roles are described in the following table:

| Permission | Admin | User |
|------------|-------|------|
| Create Recipe | ✅ | ✅ |
| Create Families | ✅ | ✅ |
| Edit Families | ✅ | ✅ (owned families) |
| Delete Families | ✅ | ✅ (owned families) |
| Add User to Family | ✅ | ✅ (owned families) |
| Remove User from Family | ✅ | ✅ (owned families) |
| Edit Recipe | ✅ | ✅ (own recipes or family recipes) |
| Delete Recipe | ✅ | ✅ (own recipes or family recipes) |
| Create Ingredient | ✅ | ✅ |
| Edit Ingredient | ✅ | ✅ (own ingredients or family ingredients) |
| Delete Ingredient | ✅ | ✅ (own ingredients or family ingredients) |
| Create Meal Plan | ✅ | ✅ (own meal plans or family meal plans) |
| Edit Meal Plan | ✅ | ✅ (own meal plans or family meal plans) |
| Delete Meal Plan | ✅ | ✅ (own meal plans or family meal plans) |