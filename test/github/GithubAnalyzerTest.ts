import GithubIssueAnalyzer from "../../src/github/GithubIssueAnalyzer";
import {join} from 'path';
import * as _ from "lodash";

const analyzer = new GithubIssueAnalyzer();
analyzer.load(join(__dirname, "../sample.json"));

it("should give issue titles", () => {

  expect(analyzer.getIssueTitles().sort())
    .toEqual(
      [
        "Accept requests sent with no-referrer in Chrome",
        "Add missing env & config dependency to `rake db:seed`",
        "Document using `default_url_options` in an ActionMailer class.",
        "Fix sequence name detection for serial columns",
        "Meta referrer=\"no-referrer\" causes all posts to fail in Chrome",
        "Pass options to `driven_by`",
        "Preload association ignores group/having in association scope.",
        "Preload association ignores left_join in association scope.",
        "Rails 5 Changes Lookup Order of Virtual SQL Attributes",
        "Remember transaction state before proceeding with transaction",
        "Remove implicit fallback to :html for JS requests",
        "Running system tests doesn’t output the correct number of assertions made",
        "Warn developers that some attributes should be defined in `config/application.rb`"
      ]
    )
});

it("should get issues with at least four comments", () => {

  let issuesWithComments = analyzer.getDebatedIssues();
  expect(issuesWithComments.map(i => i.title).sort())
    .toEqual([
      "Rails 5 Changes Lookup Order of Virtual SQL Attributes",
      "Running system tests doesn’t output the correct number of assertions made"
    ])
});

it("should get issues with the 'activerecord' label", () => {

  let activeRecordIssues = analyzer.getIssuesWithLabel("activerecord");
  expect(activeRecordIssues.map(i => i.title).sort())
    .toEqual([
      "Add missing env & config dependency to `rake db:seed`",
      "Rails 5 Changes Lookup Order of Virtual SQL Attributes",
      "Remember transaction state before proceeding with transaction"
    ])
});

it("should get the total number of issues", () => {

  expect(analyzer.getTotalNumberOfComments())
    .toEqual(37)
});

it("should group by assignee login", () => {
  const result = analyzer.groupIssuesByAssigneeLogin();

  const names = _.keys(result).sort();
  expect(names)
    .toEqual(["eileencodes", "senny"]);

  expect(result["eileencodes"].map(i => i.title).sort())
    .toEqual(["Pass options to `driven_by`", "Running system tests doesn’t output the correct number of assertions made"]);

  expect(result["senny"].map(i => i.title).sort())
    .toEqual(["Document using `default_url_options` in an ActionMailer class."]);
});

it("should get assignee stats", () => {

  expect(analyzer.getNumberOfIssuesByAssignee())
    .toEqual([
        {"name": "eileencodes", "numberOfIssues": 2},
        {"name": "senny", "numberOfIssues": 1}
      ]
    )
});

it("should get top assignee", () => {

  expect(analyzer.getTopAssignee())
    .toEqual("eileencodes")
});
