# Car Audio System Planner

A web-based car audio planning tool designed to help users estimate amplifier electrical requirements, gain voltage, impedance, and other important system values.

This project is currently in early development and will continue to expand with additional car audio planning and troubleshooting features.

## Current Features

- Calculate estimated amplifier current draw
- Calculate target gain voltage
- Select amplifier class
- Automatically estimate amplifier efficiency
- Manually adjust amplifier efficiency
- Input validation for invalid values
- Responsive interface
- Dark purple themed design

## Planned Features

Future versions may include:

- Subwoofer wiring calculator
- SVC and DVC wiring configurations
- Multiple subwoofer calculations
- Final impedance calculator
- Alternator and electrical system planning
- Battery capacity estimates
- Power wire sizing
- Voltage drop calculations
- Fuse recommendations
- Amplifier and subwoofer database
- Enclosure and port calculations
- Saved system builds
- System warnings and recommendations
- Wiring diagrams

## Why I Built This

Planning a car audio system often requires using multiple calculators, specification sheets, wiring diagrams, and online resources.

I wanted to create one application where users could enter their system information and quickly calculate useful values in one place.

This project is also being used as a way for me to improve my skills with React, TypeScript, web development, and software design while building something related to one of my personal interests.

## Technologies

- React
- TypeScript
- Vite
- HTML
- CSS
- Git
- GitHub

## Current Calculations

### Estimated Current Draw

The estimated amplifier current draw is calculated using:

```text
Current = Power / (Voltage × Efficiency)
