# chakra-step

A component to create steps similar to [Studio's steps section](https://studio.com/david-blaine-magic#how-it-works-section).

![Step](./screenshot.png)

## Usage

Import the component styles:

```ts
import { components } from "@iwatakeshi/chakra-step"
// ...

// Add to your theme
export const theme = extendTheme({
  components: {
    // ...
    ...components
  }
})
```

Start using the component

```tsx
import { Step, StepItem } from "@iwatakeshi/chakra-step"
import { Box } from "@chakra-ui/react"

// See the Page story in the stories directory for a complete example
export default function App() {
  return <Step>
    <StepItem step={1}>
     {/* Left */}
     <Box>
       {/* ... */}
     </Box>
     {/* Right */}
     <Box>
     {/* ... */}
     </Box>
    </StepItem>
  </Step>
}
```

### How It Works

The left and right side both have `50vw` applied to their widths. This keeps the line centered between the two sides. If a `Container` component is used to wrap the `Step` component, you will need to change the widths by doing the following:

```tsx
<StepItem 
  step={1} 
  leftProps={{
    w: "30vw" // or any responsive value here
  }}
  rigthProps={{
   w: "30vw"
 }} 
>

</StepItem>
```

## Contribution

If you would like to improve this library, feel free to create a pull request.
