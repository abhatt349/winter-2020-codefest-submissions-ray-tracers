class Section {
  constructor(obj) {
    let { name, grade, weight } = obj;
    this.name = name;
    this.grade = grade;
    this.weight = weight;
    this.assignments = [{}]
  }
}

module.exports = Section;
