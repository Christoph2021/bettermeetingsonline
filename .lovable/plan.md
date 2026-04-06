

# Wire Formspree Endpoint

## Change
Update `src/pages/Contact.tsx` — replace `YOUR_FORM_ID` with `mnjowary` in the endpoint constant.

```
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnjowary";
```

That's it — one line change. The form will then POST submissions to your Formspree inbox.

