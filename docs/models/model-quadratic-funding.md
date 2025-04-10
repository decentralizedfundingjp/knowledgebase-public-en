---
title: Quadratic Funding (QF)
sidebar_position: 2
description: Overview, implementation steps, tools, and success stories of Quadratic Funding.
---

# Quadratic Funding (QF)

#### Summary

**Practitioners**
* Large-scale funders such as foundations, funds, corporate CSR departments, and local governments

**Purpose**
* Attract public donations using funds as seed money
* Provide funding to projects that address actual citizen needs
* Encourage citizen participation through direct involvement

**Required Resources**
* Minimum budget of 100,000 yen
* Ability to collaborate with project applicants
* Means to reach potential donors

***

#### Overview

Quadratic Funding (QF) is a funding distribution model that calculates influence based on the square root of donation amounts and allocates additional funds from matching funds. It is particularly characterized by its design to relatively increase the influence of projects that gather many small donations. This creates a mechanism where not only large donors but also small donors can have a significant impact on fund distribution.

**Features**
* Weighting based on donation amounts, but amplifying the influence of small donations by taking the square root
* Concentrated allocation of funds to projects that gather more support through matching funds
* Ensuring transparency and fairness through technology

***

#### Benefits

* Emphasizing Small Donations
  * The mechanism that concentrates funds on projects supported by many donors helps amplify small voices
* Activating the Donation Market
  * Fairness and transparency increase donor trust and encourage new donors to participate
* Supporting Innovation
  * Increases the possibility of funding reaching niche projects and new ideas that might not receive support through traditional funding distribution

***

#### Success Stories

**UNICEF × Gitcoin: QF Implementation for Social Issue Resolution**

**Background**
* UNICEF implemented a pilot program using QF in collaboration with Gitcoin

**Implementation Process**
* Project Selection
  * Selected 10 social contribution projects utilizing blockchain and AI
* Matching Fund Utilization
  * UNICEF contributed 50 ETH as a matching pool
* Donation Results
  * Individual donations: 15,500 donations collected, raising 67.5 ETH and 15,000 DAI
  * Final allocation was determined based on the balance between the number of donors and donation amounts

***

#### Implementation Steps

1. Matching Pool Preparation
   * Clearly define funding themes (environment, child poverty, digital public goods, etc.) and target areas
   * Form matching funds

2. Applicant Recruitment
   * Set application guidelines and recruit applicant organizations

3. Donation Collection
   * Collect general donations in a crowdfunding-like format
   * Allow free donation amounts to organizations that donors value

4. Matching Fund Distribution
   * Allocate matching funds to each recipient based on weighted amounts calculated from the square root of donations

***

#### Tools

* Gitcoin Grants
  * QF platform specialized for open source projects
* Giveth
  * Community-led funding distribution tool
* DigDAO
  * Used as an experimental case in Japan

***

#### Localization Points for Social Issue Resolution

**Limitations in Project Areas**

1. Suitable for Social Issues Where Stakeholders Have Payment Capacity
   * Due to the nature of donors making payments, caution is needed when applying to social issues where stakeholders have limited financial resources
   * There is a possibility that more funds may be allocated to options that don't reflect stakeholders' voices
   * Conversely, it functions well as a mechanism to gather many voices for social issues like environmental problems where everyone is a stakeholder regardless of economic situation

2. Not Suitable for Decisions Where Expertise is Important
   * For complex social issues or projects requiring technical expertise, citizens may find it difficult to make appropriate judgments, potentially leading to ineffective fund distribution

**Adding Pre-screening Process**
* The above limitations in project areas can be improved by adding a pre-screening process by expert groups or stakeholder groups
* By screening out projects that are too far from stakeholders' current situation or inappropriate from a professional perspective in advance, it's possible to balance the collection of opinions from the entire community with expertise and stakeholder representation

**Tax System Considerations**
* It's necessary to establish mechanisms attractive to donors that reflect Japanese donation culture and tax systems
* Currently, there is no clear view on whether donations in Quadratic Funding qualify as donations under domestic law, requiring caution
* If they don't qualify, tax deductions for donations may not be available

**Sybil Attack Resistance (Preventing Multiple Accounts)**
* In QF, individuals can significantly distort voting results by creating multiple accounts and making donations from them

Example:
* Voting power when donating 10,000 yen from one account = 100
* Voting power when donating 10,000 yen in 100 yen increments from 100 accounts = 1,000

In the above example, the same donation amount can create 10 times the voting power.

To solve this, mechanisms like KYC system implementation are needed to ensure one account per person. 