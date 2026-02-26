# Experiment–2: Client-Side Form Validation

## Aim

To validate form inputs on the client side before submission.

## Theory

Client-side validation ensures correctness of user data and provides immediate feedback without server interaction.

## Procedure

1. Create form inputs.
2. Define validation conditions.
3. Display error messages.
4. Allow submission only for valid data.

## Validation Rules Used

### Email ID

- Must include `@`
- Must end with `.com`, `.in`, or a valid country code extension

### Password

1. Should start with a capital letter
2. Should have at least one number
3. Should have at least one special character
4. Should have at least 5 characters

## Screenshots

### 1. Home / Initial Form

![Home - Initial Form]![alt text](image-1.png)

### 2. Email Validation

![alt text](image.png)

### 3. Password Validation - Must Start with Capital Letter

![alt text](image-3.png)

### 4. Password Validation - Must Have at Least One Number

![alt text](image-4.png)

### 5. Password Validation - Must Have at Least One Special Character

![alt text](image-5.png)
### 6. Password Validation - Must Have at Least 5 Characters

![alt text](image-2.png)

### 7. Successful Submission

![alt text](image-6.png)
## Run

```bash
cd Experiment_6/6.2
npm install
npm run dev
```

## Build

```bash
npm run build
```
