import * as _ from "lodash";
import {Dictionary} from "lodash";

interface Issue {
  id: number,
  title: string,
  comments: number,
  labels: Label[],
  assignee?: Person
}

interface Label {
  name: string
}

interface Person {
  login: string,
  id: number
}

interface AssigneeStats {
  numberOfIssues: number,
  name: string
}

export default class GithubIssueAnalyzer {
  private issues: Issue[];

  load(filePath) {
    this.issues = require(filePath)
  }

  /**
   * Get the titles of all the issues
   */
  getIssueTitles(): string[] {
    return [];
  }

  /**
   * Get issues with at least 4 comments
   */
  getDebatedIssues(): Issue[] {
    return []
  }

  /**
   * Get issues labelled with the given argument
   */
  getIssuesWithLabel(label: string): Issue[] {
    // HINT: _.includes(array, needle) to find something in an array
    return []
  }

  /**
   * Get the total number of comments of all the issues
   */
  getTotalNumberOfComments(): number {
    return 0
  }

  /**
   * Group issues by assignees login. Issues with no assignees are filtered
   */
  groupIssuesByAssigneeLogin():Dictionary<Issue[]> {
    // HINT: _.groupBy() can take a string argument
    return {}
  }

  /**
   * Returns stats on the assignees
   */
  getNumberOfIssuesByAssignee(): AssigneeStats[] {
    // HINT: _.map() works on a dictionary. The callback function arguments are (value, key, collection)
    return [];
  }

  /**
   * Get the commiter's login with the most issues assigned
   */
  getTopAssignee(): string {
    // HINT: _.sortBy
    return "toto";
  }
}
