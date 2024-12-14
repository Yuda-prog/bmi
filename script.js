document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("calculateBtn")
    .addEventListener("click", function () {
      const weight = parseFloat(document.getElementById("weight").value);
      const height = parseFloat(document.getElementById("height").value) / 110;

      if (!weight || !height || weight <= 0 || height <= 0) {
        alert("Wrong Values");
        return;
      }

      const bmi = (weight / (height * height)).toFixed(2);
      document.getElementById("bmiValue").textContent = `BMI ANDA: ${bmi}`;

      let category = "";
      if (bmi < 18.5) {
        category = "Terlalu Kurus. Makan Lebih Banyak Protein dan Tinggi Karbo";
        document.getElementById("bmiCategory").style.color = "#17a2b8";
      } else if (bmi >= 18.5 && bmi <= 27.9) {
        category = "ANDA CUKUP SEHAT. TETAP JAGA BERAT BADAN ANDA";
        document.getElementById("bmiCategory").style.color = "#28a745";
      } else if (bmi >= 28 && bmi <= 29.9) {
        category =
          "OBESITAS SEDANG. JAGA POLA MAKAN. HINDARI GORENGAN PLUS ESTEH MANIS";
        document.getElementById("bmiCategory").style.color = "red";
      } else {
        category = "OBESITAS AKUT. TIPS DIET. HINDARI TIMBANGAN DAN CERMIN!!!";
        document.getElementById("bmiCategory").style.color = "#dc3545";
      }
      document.getElementById(
        "bmiCategory"
      ).textContent = `Category: ${category}`;

      // This thing took me so long
      const minWeight = (18.5 * height * height).toFixed(2);
      const maxWeight = (27.9 * height * height).toFixed(2);
      document.getElementById(
        "healthyWeight"
      ).textContent = `KISARAN BERAT BADAN IDEALIS BAGI PRIA DAN WANITA: ${minWeight} kg - ${maxWeight} kg`;
    });
});
