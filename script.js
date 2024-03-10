function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value / 100; // converting height to meters
    const bmi = weight / (height * height);
    document.getElementById('bmiValue').textContent = bmi.toFixed(2);
  }
  