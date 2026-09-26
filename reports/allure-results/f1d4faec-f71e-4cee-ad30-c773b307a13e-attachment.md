# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\registration.spec.ts >> Test Case 1: register and delete a user
- Location: tests\ui\registration.spec.ts:12:5

# Error details

```
Error: locator.fill: Error: strict mode violation: getByLabel('Company') resolved to 2 elements:
    1) <input value="" type="text" id="company" name="company" data-qa="company" class="form-control"/> aka getByRole('textbox', { name: 'Company', exact: true })
    2) <input value="" type="text" required="" id="address1" name="address1" data-qa="address" class="form-control"/> aka getByRole('textbox', { name: 'Address * (Street address, P.' })

Call log:
  - waiting for getByLabel('Company')

```

# Page snapshot

```yaml
- generic [ref=f2e1]:
  - banner [ref=f2e2]:
    - generic [ref=f2e5]:
      - link [ref=f2e8] [cursor=pointer]:
        - /url: /
        - img "Website for practice automation" [ref=f2e9]
      - list [ref=f2e12]:
        - listitem [ref=f2e13]:
          - link " Home" [ref=f2e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f2e15]: 
            - text: Home
        - listitem [ref=f2e16]:
          - link " Products" [ref=f2e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f2e18]: 
            - text: Products
        - listitem [ref=f2e19]:
          - link " Cart" [ref=f2e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f2e21]: 
            - text: Cart
        - listitem [ref=f2e22]:
          - link " Signup / Login" [ref=f2e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f2e24]: 
            - text: Signup / Login
        - listitem [ref=f2e25]:
          - link " Test Cases" [ref=f2e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f2e27]: 
            - text: Test Cases
        - listitem [ref=f2e28]:
          - link " API Testing" [ref=f2e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f2e30]: 
            - text: API Testing
        - listitem [ref=f2e31]:
          - link " Video Tutorials" [ref=f2e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f2e33]: 
            - text: Video Tutorials
        - listitem [ref=f2e34]:
          - link " Contact us" [ref=f2e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f2e36]: 
            - text: Contact us
  - generic [ref=f2e41]:
    - heading "Enter Account Information" [level=2] [ref=f2e42]
    - generic [ref=f2e43]:
      - generic [ref=f2e44]:
        - generic [ref=f2e45]: Title
        - generic [ref=f2e47]:
          - radio "Mr." [checked] [ref=f2e49]
          - text: Mr.
        - generic [ref=f2e51]:
          - radio "Mrs." [ref=f2e53]
          - text: Mrs.
      - generic [ref=f2e54]:
        - generic [ref=f2e55]:
          - text: Name
          - superscript [ref=f2e56]: "*"
        - textbox "Name *" [ref=f2e57]: Framework Test User
      - generic [ref=f2e58]:
        - generic [ref=f2e59]:
          - text: Email
          - superscript [ref=f2e60]: "*"
        - textbox "Email *" [disabled] [ref=f2e61]: framework-user-747ac468-cdf5-4283-922b-248f201600f4@example.com
      - generic [ref=f2e62]:
        - generic [ref=f2e63]:
          - text: Password
          - superscript [ref=f2e64]: "*"
        - textbox "Password *" [ref=f2e65]: FrameworkTest123!
      - generic [ref=f2e66]:
        - generic [ref=f2e67]: Date of Birth
        - generic [ref=f2e68]:
          - combobox [ref=f2e71]:
            - option "Day"
            - option "1"
            - option "2"
            - option "3"
            - option "4"
            - option "5"
            - option "6"
            - option "7"
            - option "8"
            - option "9"
            - option "10" [selected]
            - option "11"
            - option "12"
            - option "13"
            - option "14"
            - option "15"
            - option "16"
            - option "17"
            - option "18"
            - option "19"
            - option "20"
            - option "21"
            - option "22"
            - option "23"
            - option "24"
            - option "25"
            - option "26"
            - option "27"
            - option "28"
            - option "29"
            - option "30"
            - option "31"
          - combobox [ref=f2e74]:
            - option "Month"
            - option "January"
            - option "February"
            - option "March"
            - option "April"
            - option "May" [selected]
            - option "June"
            - option "July"
            - option "August"
            - option "September"
            - option "October"
            - option "November"
            - option "December"
          - combobox [ref=f2e77]:
            - option "Year"
            - option "2021"
            - option "2020"
            - option "2019"
            - option "2018"
            - option "2017"
            - option "2016"
            - option "2015"
            - option "2014"
            - option "2013"
            - option "2012"
            - option "2011"
            - option "2010"
            - option "2009"
            - option "2008"
            - option "2007"
            - option "2006"
            - option "2005"
            - option "2004"
            - option "2003"
            - option "2002"
            - option "2001"
            - option "2000"
            - option "1999"
            - option "1998"
            - option "1997"
            - option "1996"
            - option "1995"
            - option "1994"
            - option "1993"
            - option "1992"
            - option "1991"
            - option "1990" [selected]
            - option "1989"
            - option "1988"
            - option "1987"
            - option "1986"
            - option "1985"
            - option "1984"
            - option "1983"
            - option "1982"
            - option "1981"
            - option "1980"
            - option "1979"
            - option "1978"
            - option "1977"
            - option "1976"
            - option "1975"
            - option "1974"
            - option "1973"
            - option "1972"
            - option "1971"
            - option "1970"
            - option "1969"
            - option "1968"
            - option "1967"
            - option "1966"
            - option "1965"
            - option "1964"
            - option "1963"
            - option "1962"
            - option "1961"
            - option "1960"
            - option "1959"
            - option "1958"
            - option "1957"
            - option "1956"
            - option "1955"
            - option "1954"
            - option "1953"
            - option "1952"
            - option "1951"
            - option "1950"
            - option "1949"
            - option "1948"
            - option "1947"
            - option "1946"
            - option "1945"
            - option "1944"
            - option "1943"
            - option "1942"
            - option "1941"
            - option "1940"
            - option "1939"
            - option "1938"
            - option "1937"
            - option "1936"
            - option "1935"
            - option "1934"
            - option "1933"
            - option "1932"
            - option "1931"
            - option "1930"
            - option "1929"
            - option "1928"
            - option "1927"
            - option "1926"
            - option "1925"
            - option "1924"
            - option "1923"
            - option "1922"
            - option "1921"
            - option "1920"
            - option "1919"
            - option "1918"
            - option "1917"
            - option "1916"
            - option "1915"
            - option "1914"
            - option "1913"
            - option "1912"
            - option "1911"
            - option "1910"
            - option "1909"
            - option "1908"
            - option "1907"
            - option "1906"
            - option "1905"
            - option "1904"
            - option "1903"
            - option "1902"
            - option "1901"
            - option "1900"
      - generic [ref=f2e78]:
        - checkbox "Sign up for our newsletter!" [checked] [ref=f2e79]
        - text: Sign up for our newsletter!
      - generic [ref=f2e80]:
        - checkbox "Receive special offers from our partners!" [checked] [ref=f2e81]
        - text: Receive special offers from our partners!
      - heading "Address Information" [level=2] [ref=f2e82]
      - paragraph [ref=f2e83]:
        - generic [ref=f2e84]:
          - text: First name
          - superscript [ref=f2e85]: "*"
        - textbox "First name *" [ref=f2e86]: Framework
      - paragraph [ref=f2e87]:
        - generic [ref=f2e88]:
          - text: Last name
          - superscript [ref=f2e89]: "*"
        - textbox "Last name *" [active] [ref=f2e90]: User
      - paragraph [ref=f2e91]:
        - generic [ref=f2e92]: Company
        - textbox "Company" [ref=f2e93]
      - paragraph [ref=f2e94]:
        - generic [ref=f2e95]:
          - text: Address
          - superscript [ref=f2e96]: "*"
          - text: (Street address, P.O. Box, Company name, etc.)
        - textbox "Address * (Street address, P.O. Box, Company name, etc.)" [ref=f2e97]
      - paragraph [ref=f2e98]:
        - generic [ref=f2e99]: Address 2
        - textbox "Address 2" [ref=f2e100]
      - paragraph [ref=f2e101]:
        - generic [ref=f2e102]:
          - text: Country
          - superscript [ref=f2e103]: "*"
        - combobox "Country *" [ref=f2e104]:
          - option "India" [selected]
          - option "United States"
          - option "Canada"
          - option "Australia"
          - option "Israel"
          - option "New Zealand"
          - option "Singapore"
      - paragraph [ref=f2e105]:
        - generic [ref=f2e106]:
          - text: State
          - superscript [ref=f2e107]: "*"
        - textbox "State *" [ref=f2e108]
      - paragraph [ref=f2e109]:
        - generic [ref=f2e110]:
          - text: City
          - superscript [ref=f2e111]: "*"
        - textbox "City * Zipcode *" [ref=f2e112]
      - paragraph [ref=f2e113]:
        - generic [ref=f2e114]:
          - text: Zipcode
          - superscript [ref=f2e115]: "*"
        - textbox [ref=f2e116]
      - paragraph [ref=f2e117]:
        - generic [ref=f2e118]:
          - text: Mobile Number
          - superscript [ref=f2e119]: "*"
        - textbox "Mobile Number *" [ref=f2e120]
      - button "Create Account" [ref=f2e121] [cursor=pointer]
  - contentinfo [ref=f2e122]:
    - generic [ref=f2e127]:
      - heading "Subscription" [level=2] [ref=f2e128]
      - generic [ref=f2e129]:
        - textbox "Your email address" [ref=f2e130]
        - button "" [ref=f2e131] [cursor=pointer]
        - paragraph [ref=f2e133]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f2e137]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  11  |   firstName: string;
  12  |   lastName: string;
  13  |   company: string;
  14  |   address: string;
  15  |   address2: string;
  16  |   country: string;
  17  |   state: string;
  18  |   city: string;
  19  |   zipcode: string;
  20  |   mobileNumber: string;
  21  | };
  22  | 
  23  | export class RegistrationPage {
  24  |   private readonly accountInformationHeading: Locator;
  25  |   private readonly mrTitleOption: Locator;
  26  |   private readonly mrsTitleOption: Locator;
  27  |   private readonly passwordInput: Locator;
  28  |   private readonly birthDaySelect: Locator;
  29  |   private readonly birthMonthSelect: Locator;
  30  |   private readonly birthYearSelect: Locator;
  31  |   private readonly newsletterCheckbox: Locator;
  32  |   private readonly partnerOffersCheckbox: Locator;
  33  |   private readonly firstNameInput: Locator;
  34  |   private readonly lastNameInput: Locator;
  35  |   private readonly companyInput: Locator;
  36  |   private readonly addressInput: Locator;
  37  |   private readonly address2Input: Locator;
  38  |   private readonly countrySelect: Locator;
  39  |   private readonly stateInput: Locator;
  40  |   private readonly cityInput: Locator;
  41  |   private readonly zipcodeInput: Locator;
  42  |   private readonly mobileNumberInput: Locator;
  43  |   private readonly createAccountButton: Locator;
  44  |   private readonly accountCreatedMessage: Locator;
  45  |   private readonly continueLink: Locator;
  46  | 
  47  |   constructor(page: Page) {
  48  |     this.accountInformationHeading = page.getByRole('heading', {
  49  |       name: /ENTER ACCOUNT INFORMATION/i,
  50  |     });
  51  |     this.mrTitleOption = page.getByRole('radio', { name: 'Mr.', exact: true });
  52  |     this.mrsTitleOption = page.getByRole('radio', { name: 'Mrs.', exact: true });
  53  |     this.passwordInput = page.getByLabel('Password');
  54  |     this.birthDaySelect = page.locator('#days');
  55  |     this.birthMonthSelect = page.locator('#months');
  56  |     this.birthYearSelect = page.locator('#years');
  57  |     this.newsletterCheckbox = page.getByRole('checkbox', {
  58  |       name: /Sign up for our newsletter/i,
  59  |     });
  60  |     this.partnerOffersCheckbox = page.getByRole('checkbox', {
  61  |       name: /Receive special offers from our partners/i,
  62  |     });
  63  |     this.firstNameInput = page.getByLabel('First name');
  64  |     this.lastNameInput = page.getByLabel('Last name');
  65  |     this.companyInput = page.getByLabel('Company');
  66  |     this.addressInput = page.getByLabel('Address', { exact: true });
  67  |     this.address2Input = page.getByLabel('Address 2');
  68  |     this.countrySelect = page.getByLabel('Country');
  69  |     this.stateInput = page.getByLabel('State');
  70  |     this.cityInput = page.getByLabel('City');
  71  |     this.zipcodeInput = page.getByLabel('Zipcode');
  72  |     this.mobileNumberInput = page.getByLabel('Mobile Number');
  73  |     this.createAccountButton = page.getByRole('button', {
  74  |       name: 'Create Account',
  75  |       exact: true,
  76  |     });
  77  |     this.accountCreatedMessage = page.getByText('ACCOUNT CREATED!', {
  78  |       exact: true,
  79  |     });
  80  |     this.continueLink = page.getByRole('link', {
  81  |       name: 'Continue',
  82  |       exact: true,
  83  |     });
  84  |   }
  85  | 
  86  |   async waitUntilReady(): Promise<void> {
  87  |     await this.accountInformationHeading.waitFor({ state: 'visible' });
  88  |   }
  89  | 
  90  |   async fillAccountDetails(details: RegistrationData): Promise<void> {
  91  |     if (details.title === 'Mrs.') {
  92  |       await this.mrsTitleOption.check();
  93  |     } else {
  94  |       await this.mrTitleOption.check();
  95  |     }
  96  | 
  97  |     await this.passwordInput.fill(details.password);
  98  |     await this.birthDaySelect.selectOption({ label: details.birthDay });
  99  |     await this.birthMonthSelect.selectOption({ label: details.birthMonth });
  100 |     await this.birthYearSelect.selectOption({ label: details.birthYear });
  101 | 
  102 |     if (details.newsletter) {
  103 |       await this.newsletterCheckbox.check();
  104 |     }
  105 |     if (details.partnerOffers) {
  106 |       await this.partnerOffersCheckbox.check();
  107 |     }
  108 | 
  109 |     await this.firstNameInput.fill(details.firstName);
  110 |     await this.lastNameInput.fill(details.lastName);
> 111 |     await this.companyInput.fill(details.company);
      |                             ^ Error: locator.fill: Error: strict mode violation: getByLabel('Company') resolved to 2 elements:
  112 |     await this.addressInput.fill(details.address);
  113 |     await this.address2Input.fill(details.address2);
  114 |     await this.countrySelect.selectOption({ label: details.country });
  115 |     await this.stateInput.fill(details.state);
  116 |     await this.cityInput.fill(details.city);
  117 |     await this.zipcodeInput.fill(details.zipcode);
  118 |     await this.mobileNumberInput.fill(details.mobileNumber);
  119 |   }
  120 | 
  121 |   async createAccount(): Promise<void> {
  122 |     await this.createAccountButton.click();
  123 |   }
  124 | 
  125 |   get accountCreated(): Locator {
  126 |     return this.accountCreatedMessage;
  127 |   }
  128 | 
  129 |   async continueToAccount(): Promise<void> {
  130 |     await this.continueLink.click();
  131 |   }
  132 | }
```