function checkGrades(grades) {
  console.log("Jumlah nilai yang diperiksa:", grades.length);
  for (let i = 0; i < grades.length; i++) {
    if (typeof grades[i] !== "number") {
      throw new Error("Invalid input. please [provide an array of numbers.");
    }

    const grade = grades[i];
    let predicate;

    if (grade >= 90) {
      predicate = "A";
    } else if (grade >= 80) {
      predicate = "B";
    } else if (grade >= 75) {
      predicate = "C";
    } else if (grade >= 60) {
      predicate = "D";
    } else {
      predicate = "E";
    }

    console.log(`Grade ${i + 1}: ${grade} (${predicate})`);
  }
}

try {
  const studenGrades = [95, 87, 65, 80, 50];
  checkGrades(studenGrades);
} catch (e) {
  console.error(e);
}
