I want you to build a responsive landing page based on the attached Figma screenshot/reference image.

The page is for an unofficial Necromunda campaign called “Great Warsaw Campaign”. The visual style should be grimdark, industrial, clean, bold, high-contrast, and slightly brutalist. The layout should match the screenshot as closely as possible.

Use modern frontend code. Prefer React + TypeScript if possible. Use clean component structure, semantic HTML, CSS modules / Tailwind / modern CSS, and accessible form controls. The page should be polished, responsive, animated, and production-ready.

Main goal:
Recreate the visible “Dołącz” registration page and implement all visible interactive elements, including the form, navigation, camp selection tabs, validation, CTA behavior, hover states, animations, and responsive layout.

Important:
Do not create a generic landing page. Recreate the specific layout and mood from the screenshot. The page should feel like an official-looking grimdark tabletop campaign registration page, but with a clear disclaimer that it is an unofficial fan project.

------------------------------------------------------------
ROUTING / PAGE STRUCTURE
------------------------------------------------------------

The website has four navigation links:

- Dołącz
- Kampania
- Regulamin
- Gracze

The visible page from the screenshot is the “Dołącz” page. This should be treated as the active/current page.

Routes:

- /dolacz
- /kampania
- /regulamin
- /gracze

If the app starts at "/", redirect to "/dolacz" or render the “Dołącz” page as the default page.

“Dołącz” is the current registration page visible in the screenshot.

“Kampania”, “Regulamin”, and “Gracze” should not scroll to sections on the same page. They should be implemented as separate subpages/routes that will be designed later.

For now, create placeholder pages for:

/kampania
- Show the same sidebar navigation.
- Mark “Kampania” as active.
- Show centered placeholder content:
  “Kampania”
  “This page will contain the campaign overview.”

/regulamin
- Show the same sidebar navigation.
- Mark “Regulamin” as active.
- Show centered placeholder content:
  “Regulamin”
  “This page will contain the campaign rules.”

/gracze
- Show the same sidebar navigation.
- Mark “Gracze” as active.
- Show centered placeholder content:
  “Gracze”
  “This page will contain the player and gang list.”

The placeholder pages do not need the full hero design yet, but they should use the same visual language, background, typography, and sidebar.

------------------------------------------------------------
TYPOGRAPHY
------------------------------------------------------------

The main font used on the page, especially for headings, labels, navigation items, buttons, and strong UI text, is:

“Barlow Condensed”

Import the font from Google Fonts if external font loading is allowed.

Use Barlow Condensed for:

- main hero heading “GREAT WARSAW CAMPAIGN”
- sidebar navigation
- form labels
- camp selection labels
- CTA button
- section headings such as “ORGANIZATORZY”
- strong UI text

Use a regular readable sans-serif fallback for longer body text if needed, for example:

system-ui, Arial, Inter, sans-serif

Suggested CSS setup:

font-family: "Barlow Condensed", system-ui, sans-serif;

The hero heading should use Barlow Condensed in a heavy weight, preferably 700 or 800.

UI labels and navigation should use medium/semi-bold weight, around 500-700.

Use uppercase typography where visible in the design.

Keep the condensed, tall, industrial look. Do not replace it with generic fonts like Arial, Roboto, Montserrat, Bebas Neue, Oswald, or Anton unless Barlow Condensed cannot be loaded.

------------------------------------------------------------
GLOBAL VISUAL STYLE
------------------------------------------------------------

Overall style:
- clean grimdark campaign landing page
- industrial
- tabletop wargaming atmosphere
- high contrast
- brutal but readable
- cinematic but not overloaded

Background:
- warm off-white / very light grey
- not pure white if possible
- subtle paper-like or dusty feeling is acceptable, but keep it clean

Primary color:
- dark navy blue, similar to the active camp card and CTA button in the screenshot

Text colors:
- black for main titles
- dark navy for labels
- muted grey for secondary text
- white text on dark navy buttons/cards

Borders:
- mostly black or dark grey
- slightly rounded corners
- not overly soft
- avoid generic SaaS roundness

The page should avoid a generic startup/SaaS look. It should feel like a tabletop campaign interface with strong visual identity.

------------------------------------------------------------
LEFT SIDEBAR NAVIGATION
------------------------------------------------------------

Create a fixed left vertical sidebar on desktop.

Desktop sidebar:
- black / near-black background
- narrow width similar to the screenshot
- fixed to the left edge
- full viewport height
- skull icon at the top
- navigation links below the icon

Navigation links in this exact order:

1. Dołącz
2. Kampania
3. Regulamin
4. Gracze

Behavior:
- “Dołącz” points to /dolacz.
- “Kampania” points to /kampania.
- “Regulamin” points to /regulamin.
- “Gracze” points to /gracze.
- Do not make these links scroll to sections on the same page.
- They are real page/route navigation links.
- The active state should be based on the current route/page, not scroll position.

Current page:
- On the /dolacz page, “Dołącz” should be active.

Sidebar style:
- skull icon: small, white, centered near the top
- links: uppercase, Barlow Condensed, light grey / white
- active link: brighter text, subtle highlight, small marker, or stronger contrast
- hover state: slightly brighter text, subtle underline, or small movement
- keep it minimal and grimdark

Accessibility:
- use real anchor/link elements
- add aria-current="page" to the active navigation link

Mobile behavior:
- The sidebar should become a compact top navigation or hamburger menu.
- Keep the same four links.
- The active link should still be visible.

------------------------------------------------------------
DOŁĄCZ PAGE / HERO SECTION
------------------------------------------------------------

The /dolacz page should recreate the screenshot.

Hero section:
- large off-white background
- left side contains the main title
- right side contains the large hive city illustration
- Necromunda logo appears in the upper-right hero area

Main title:
Display as stacked text:

GREAT
WARSAW
CAMPAIGN

Style:
- very large
- black
- uppercase
- Barlow Condensed
- heavy weight, preferably 700 or 800
- tight line-height
- strong vertical composition
- match the screenshot as closely as possible

Hero image:
- Use the provided hive city image asset if available.
- Place it on the right side.
- It should dominate the right side of the hero.
- It should slightly overlap or visually connect with the form/CTA area.
- Keep the artwork large and atmospheric.
- It should not become too dark; preserve the bright background composition.
- Add a subtle fade-in from the right on page load.
- Optional: add very subtle parallax movement on mouse move or scroll.
- Do not overdo it.

Necromunda logo:
- Use the provided logo asset if available.
- Place it in the upper-right area, above or near the hive city image.
- It should match the screenshot placement.
- It can have a subtle fade-in on page load.
- Keep it static after load.

------------------------------------------------------------
REGISTRATION FORM
------------------------------------------------------------

Place the form on the left/middle area below the main title, matching the screenshot.

Fields:

1. Text input
Label:
GRACZ

Placeholder:
Wpisz swoje imię/ksywę...

2. Select / dropdown
Label:
GANG HOUSE

Placeholder:
Wybierz gang house...

Options:
- Cawdor
- Escher
- Goliath
- Van Saar
- Orlock
- Delaque
- Corpse Grinder Cult
- Enforcers
- Ash Waste Nomads
- Inne

3. Text input
Label:
NAZWA GANGU

Placeholder:
Wpisz nazwę swojego gangu...

Form layout:
- On desktop, the first row should contain:
  - Gracz input
  - Gang House select
- The second row should contain:
  - Nazwa gangu input
- Match the spacing from the screenshot.
- The form should sit visually under the title, aligned with the left content column.

Styling:
- Labels: uppercase, Barlow Condensed, dark navy, semi-bold
- Inputs: light grey background, black/dark border, slightly rounded corners
- Placeholder text: muted grey
- Focus state: visible darker border, subtle shadow, or navy outline
- Error state: red border and short error text below the field
- Disabled state is not needed unless used during submit/loading

Validation:
- All three fields are required.
- If the user clicks the CTA button without completing required fields, show errors:
  - Gracz: “Podaj imię lub ksywę.”
  - Gang House: “Wybierz gang house.”
  - Nazwa gangu: “Podaj nazwę gangu.”
- Do not submit if validation fails.
- Error messages should appear smoothly.
- Error messages should be close to their fields.
- Do not show errors before the first submit attempt unless the user has interacted with a field.

Accessibility:
- Use proper label elements.
- Inputs must be keyboard accessible.
- Select must be keyboard accessible.
- Use aria-invalid for invalid fields.
- Use aria-describedby for error messages if possible.

------------------------------------------------------------
CAMP / BASE SELECTION
------------------------------------------------------------

Add section title:

WYBIERZ SWÓJ OBÓZ

Below it create three clickable tab/card buttons:

1. CHMIEL I SŁÓD
2. MATISOFT
3. WASTES

Each tab should include a simple icon above the label.

Icon direction:
- Chmiel i Słód: gear / beer / industrial pub style icon
- Matisoft: industrial factory / building / gaming club style icon
- Wastes: hooded wasteland / scavenger style icon

If actual icon assets are available, use them.
If not, use simple placeholder SVG icons that visually match the mood.

Behavior:
- Only one camp can be active at a time.
- Default selected camp: “Chmiel i Słód”.
- Active tab has dark navy background, white icon and white text.
- Inactive tabs have light background, dark icon/text, and border.
- On hover, inactive tabs should slightly darken, lift, or increase contrast.
- On click, update the selected camp and update the description card below.

The camp choices should behave like a tab group or segmented card selection.

Accessibility:
- Use button elements, or implement proper tab semantics.
- The selected item should have aria-selected if using tabs.
- Keyboard navigation should work.

------------------------------------------------------------
SELECTED CAMP DESCRIPTION CARD
------------------------------------------------------------

Below the camp selection tabs, show a description card for the active camp.

Card structure:
- icon on the left
- vertical separator line
- camp title on the right
- short description under the title

Use the following descriptions:

Chmiel i Słód:
“Pub and local campaign base in Legionowo. A good place for regular campaign games, meetings, and community play.”

Matisoft:
“Gaming club and campaign base on Żerań. A strong local hub for Necromunda games, league matches, and organized events.”

Wastes:
“Remote or flexible play location for games outside the main venues. Use this if you want to play at home, in another club, or somewhere else.”

Style:
- light background
- black/dark border
- slightly rounded corners
- dark navy title
- muted grey body text
- match the screenshot proportions

Animation:
- When the selected camp changes, animate the card content with a short fade/slide transition.
- Keep it subtle and fast.
- Do not make the interface feel playful or bouncy.

------------------------------------------------------------
CTA BUTTON
------------------------------------------------------------

Add a large dark navy CTA button centered under/near the form and hero image overlap area, matching the screenshot.

Button text:

DOŁĄCZ DO WIELKIEJ KAMPANII

Add skull icons on both sides of the text:
- skull icon left
- skull icon right

Style:
- dark navy background
- white uppercase text
- Barlow Condensed
- bold/semi-bold
- large button
- slight border radius
- strong campaign-like feel

Behavior:
- On hover: button slightly lifts, background becomes a little brighter, text remains white.
- On active/click: small press-down effect.
- On submit:
  - Validate all form fields.
  - If validation fails, show errors and do not submit.
  - If validation passes, show loading state for around 500ms.
  - During loading, button text can change to:
    “WYSYŁANIE...”
  - After loading, show a success modal or success message.

Success message/modal:
Title:
Zgłoszenie przyjęte

The message should summarize:
- player name
- selected gang house
- gang name
- selected camp

Example:
“Twoje zgłoszenie zostało zapisane.”

Show the submitted values in a clean summary.

Add a close button.

Modal accessibility:
- close button
- Escape key closes modal
- focus should move into the modal when opened
- focus should return to the CTA after closing if possible
- add basic focus trap if possible

------------------------------------------------------------
LEGAL DISCLAIMER STRIP
------------------------------------------------------------

Under the hero section, add a very thin horizontal disclaimer line, matching the screenshot.

Text:

“Necromunda and all associated logos, characters, names, and artwork are trademarks and/or copyrights of Games Workshop Ltd. This website and campaign are unofficial fan projects and are not endorsed by Games Workshop.”

Style:
- very small text
- monospace or condensed small text
- light grey / muted color
- centered
- thin top border or subtle divider
- it should feel like a quiet legal note, not a main content block

------------------------------------------------------------
ORGANIZERS SECTION
------------------------------------------------------------

Below the hero/disclaimer, add a section with heading:

ORGANIZATORZY

Display three logos horizontally:

- Minowar.com
- Matisoft
- Chmiel i Słód

Use provided logo assets if available.
If assets are not available, use placeholder image blocks or text-based logo representations.

Layout:
- centered section
- generous white space
- heading large, black, uppercase, Barlow Condensed
- logos centered horizontally
- spacing should match the screenshot

Interactions:
- Each organizer logo should be clickable.
- Use “#” if real URLs are not provided.
- On hover:
  - slight scale up
  - slight opacity/contrast change
- Keep the hover effect subtle.

------------------------------------------------------------
ANIMATIONS
------------------------------------------------------------

Add subtle, premium animations.

Page load:
- Sidebar appears immediately or fades in subtly.
- Title fades/slides in from left.
- Form fades in slightly after title.
- Hive city image fades in from right.
- Necromunda logo fades in.
- CTA fades/slides upward.
- Organizers section can fade in when scrolled into view.

Hover:
- Sidebar links highlight.
- Camp cards lift or change contrast.
- CTA button lifts.
- Organizer logos slightly scale.

Camp selection:
- Active state changes immediately.
- Description card crossfades/slides.

Form:
- Focus states on inputs.
- Error messages appear smoothly.

Optional:
- Very subtle parallax on the hive city image.
- Very subtle movement or opacity variation around the image if it does not harm performance.

Important:
Do not overdo animations. The page should feel heavy, cinematic, and controlled, not playful.

Respect reduced motion:
- If the user has prefers-reduced-motion enabled, disable or greatly reduce animations.

------------------------------------------------------------
RESPONSIVENESS
------------------------------------------------------------

Desktop:
- Sidebar fixed left.
- Hero content uses two-column composition:
  - left: title + form
  - right: hive city artwork
- CTA can sit visually between form and artwork as in the screenshot.
- Organizers section is below the hero.

Tablet:
- Sidebar can remain narrow or move to top depending on available space.
- Hero image should scale down.
- Form should remain readable.
- Camp cards should fit in one row if possible.
- Keep the page balanced.

Mobile:
- Sidebar becomes top navigation or hamburger menu.
- Hero title becomes smaller but still bold.
- Form fields stack vertically.
- Gang House dropdown moves below player input.
- Camp cards stack or become horizontal scrollable tabs.
- Hive city image should move below title or become a controlled background/illustration block.
- CTA full width or almost full width.
- Organizer logos stack vertically or wrap.
- Ensure no horizontal overflow.
- Maintain good tap targets.

------------------------------------------------------------
ACCESSIBILITY
------------------------------------------------------------

General:
- Use semantic HTML.
- Use proper headings hierarchy.
- Use real buttons for actions.
- Use real links for navigation.
- Maintain good contrast.
- Ensure all interactive elements are keyboard accessible.
- Visible focus states are required.

Navigation:
- Add aria-current="page" for the active sidebar navigation link.

Form:
- Use proper labels.
- Use aria-invalid for invalid fields.
- Use aria-describedby for error messages if possible.

Camp selection:
- Use button elements or accessible tab semantics.
- Add aria-selected for active camp tab if implemented as tabs.

Modal:
- close button
- Escape key closes modal
- focus moves into modal when opened
- focus returns after close if possible

Reduced motion:
- Respect prefers-reduced-motion.

------------------------------------------------------------
DATA STRUCTURE
------------------------------------------------------------

Create a navigation data structure:

const navigationItems = [
  {
    label: "Dołącz",
    path: "/dolacz"
  },
  {
    label: "Kampania",
    path: "/kampania"
  },
  {
    label: "Regulamin",
    path: "/regulamin"
  },
  {
    label: "Gracze",
    path: "/gracze"
  }
];

Use this navigation data to render the sidebar and determine the active page.

Create a camp data structure:

const camps = [
  {
    id: "chmiel",
    name: "Chmiel i Słód",
    icon: "...",
    description: "Pub and local campaign base in Legionowo. A good place for regular campaign games, meetings, and community play."
  },
  {
    id: "matisoft",
    name: "Matisoft",
    icon: "...",
    description: "Gaming club and campaign base on Żerań. A strong local hub for Necromunda games, league matches, and organized events."
  },
  {
    id: "wastes",
    name: "Wastes",
    icon: "...",
    description: "Remote or flexible play location for games outside the main venues. Use this if you want to play at home, in another club, or somewhere else."
  }
];

Use this data to render:
- camp tabs
- active camp description card
- submitted camp value in the success modal

Create a gang house array:

const gangHouses = [
  "Cawdor",
  "Escher",
  "Goliath",
  "Van Saar",
  "Orlock",
  "Delaque",
  "Corpse Grinder Cult",
  "Enforcers",
  "Ash Waste Nomads",
  "Inne"
];

Use this array to render the dropdown options.

------------------------------------------------------------
EXPECTED RESULT
------------------------------------------------------------

Deliver a complete working page that visually matches the attached screenshot and includes:

- Fixed/responsive navigation with four links:
  - Dołącz
  - Kampania
  - Regulamin
  - Gracze
- “Dołącz” as the active/current page
- Separate placeholder routes/pages for:
  - Kampania
  - Regulamin
  - Gracze
- Barlow Condensed as the main visual font
- Hero title
- Hive city artwork area
- Necromunda logo area
- Registration form with validation
- Gang House dropdown
- Camp selection tabs
- Dynamic camp description
- Animated CTA with validation and success modal
- Legal disclaimer strip
- Organizers section
- Responsive behavior
- Accessible interactions
- Clean, maintainable code

Final quality expectation:
The page should look custom, atmospheric, and close to the provided Figma screenshot. It should not look like a generic template. The result should be ready for further development of the remaining subpages.