class Section {
  constructor(obj) {
    let { name, grade, weight } = obj;
    this.name = name;
    this.grade = grade;
    this.weight = weight;
    this.assignments = [
      {"Assignment #1": 100},
      {"Assignment #2": 50}
    ]
  }
}

module.exports = Section;
