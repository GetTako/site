---
seo:
  title: TAKO - A Go TUI framework without the duct tape.
  description: You handle the pixels. Tako handles DI, events, routing, and plugins — so your terminal app doesn't turn into a 3000-line main.go nobody wants to touch.
---

::u-page-hero{.hero-uneven}
---
orientation: horizontal
reverse: true
---
#headline
::div{.flex.items-center.gap-3.justify-center.md:justify-start.md:block}
  <img src="/logo.webp" alt="Logo" class="w-16 h-16 md:hidden" />

  **TAKO**{.text-2xl.md:text-3xl.font-black.text-primary.tracking-widest.uppercase}
::

#title
A Go TUI framework without the duct tape

#description
You handle the pixels. Tako handles DI, events, routing, and plugins — so your terminal app doesn't turn into a 3000-line main.go nobody wants to touch.

#links
  :::u-button
  ---
  color: primary
  variant: outline
  size: xl
  to: /overview
  trailing-icon: i-lucide-arrow-right
  ---
  Get Started
  :::

  :::u-button
  ---
  color: neutral
  variant: outline
  size: xl
  to: https://github.com/gettako/tako
  ---
  View on GitHub
  :::

#default
  ::div{.w-full.hidden.md:flex.justify-center.items-center.min-h-[400px]}
    <img src="/logo.webp" alt="Logo" class="w-[450px] h-auto animate-float" />
  ::
::
 
::LandingFeatureGrid
::

::LandingHowItWorks
::

::LandingDivider
::

::LandingCorePrimitives
::

::LandingDivider
::

::LandingDualKernel
::

::LandingDivider
::

::LandingServiceProviders
#manifest
```go
func (p *Plugin) Manifest() foundation.PluginManifest {
  return foundation.PluginManifest{
    Name: "my-plugin",
  }
}

func (p *Plugin) Dependencies() []string {
  return []string{"logger"}
}
```

#boot
```go
func main() {
  app := tako.NewApp()

  app.RegisterProviders(
    &Plugin{},
  )
}
```

#logic
```go
func (p *Plugin) Register(app *foundation.Application) error {
  return nil
}

func (p *Plugin) Boot(app *foundation.Application) error {
  app.Events().On("search", p.onSearch)
  return nil
}
```
::

::LandingDivider
::

::LandingArchitectureComparison
::

::LandingDivider
::

::LandingGetStarted
#code
```go
package main

import (
  "log"

  "gettako.dev/tako"
  "gettako.dev/tako/contracts"
  "gettako.dev/tako/pkg/adapter/ui/bubbletea"
)

type Layout struct{}

func (l *Layout) ID() string              { return "dashboard" }
func (l *Layout) Render() any             { return "Hello, Tako! Press ctrl+c to exit.\n" }
func (l *Layout) RegisterKeys(contracts.KeyManager) {}

func main() {
  app := tako.NewApp()

  // Mount the Bubble Tea adapter
  app.Mount(bubbletea.NewAdapter(app.Context(), nil))
  
  // Set your root layout
  app.UI().Layout(&Layout{})

  if err := tako.Run(app); err != nil {
    log.Fatal(err)
  }
}
```

#custom-code
```go
package myadapter

import (
  "time"

  "gettako.dev/tako"
  "gettako.dev/tako/contracts"
  "gettako.dev/tako/pkg/adapter"
)

type MyAdapter struct {
  adapter.BaseAdapter
  ctx *tako.Context
  // your UI library handle, e.g. app *tview.Application
}

func NewMyAdapter(ctx *tako.Context) *MyAdapter {
  a := &MyAdapter{ctx: ctx}
  a.BaseAdapter = *adapter.NewBaseAdapter(ctx)
  return a
}

// Render is called once by the TUI Kernel. Must block until the UI exits.
func (a *MyAdapter) Render() error {
  a.InitProfiler()

  // Forward key events to Tako's router
  // yourLib.OnKey(func(key string) { a.HandleKey(key) })

  // Poll the event bus and trigger redraws
  a.StartEventLoop(a.ctx, 16*time.Millisecond, func(events []contracts.Event) {
    // yourLib.Draw()
  })

  // Hand over to your UI library (must block)
  return nil // return yourLib.Run()
}

// Stop releases the terminal during shutdown.
func (a *MyAdapter) Stop() error {
  // yourLib.Stop()
  return nil
}
```

```go

// Register it fluently:
app.Mount(NewMyAdapter(app.Context()))
```
::


::LandingDivider
::

::LandingFaq
::

::LandingDivider
::

::LandingBottomCta
::

::LandingDivider
::

::LandingDirectory
::
