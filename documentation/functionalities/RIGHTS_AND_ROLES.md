# User Rights and Roles

This document describes the rights and roles for users of the application.

## Signup

Every user can signup for the application. The user will be asked to provide an email address and password. The email address will be used to verify the user's account and the password will be used to login to the application.

After signup the user can choose an account name, this is purely cosmetic and will be shown to other users.

## Password Reset

The user can reset their password by clicking on the password reset link in the email. The user will be asked to provide a new password. The new password will be used to login to the application.

## Email Verification

The user will be asked to verify their email address after signup. The user will be asked to click on the verification link in the email. The email address will be verified and the user will be able to login to the application.

## Account Deletion

The user can delete their account by clicking on the account deletion link in the email. The user will be asked to provide a reason for the deletion. The user will be asked to click on the account deletion link in the email. The account will be deleted and the user will not be able to login to the application anymore.

Any recipes referenced to the user will be by "Unknown Author", admins can change the author to another user or to "Unknown Author" if they wish.

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