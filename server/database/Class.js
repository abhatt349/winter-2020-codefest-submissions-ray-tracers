class Class {
  constructor(obj) {
    let { name, prof, meeting, credit, sections, grade } = obj;
    this.name = name;
    this.prof = prof;
    this.meeting = meeting;
    this.credit = credit;
    this.sections = sections;
    this.grade = grade;
  }
}

module.exports = Class;
