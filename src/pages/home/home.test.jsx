import { describe, expect, it } from 'vitest';
import { render, fireEvent, screen } from 'solid-testing-library';
import { Router } from "@solidjs/router"
import Home from './Home';

describe('<Home /> Component Test Suite', () => {

  it("should assert document title as expected", () => {
    render(() => <Router><Home /></Router>);
    expect(document.title).toEqual("Solid - Home")
  });


  it("should assert 'Home Page' element exists.", () => {
    render(() => <Router><Home /></Router>);
    const homepageText = screen.getByText('Home Page');
    expect(homepageText).toBeInTheDocument();

  });

  it("should render 'button' element with 'Show' text.", () => {
    render(() => <Router><Home /></Router>);
    const button = screen.getByText('Show');
    expect(button).toBeInTheDocument();

  });

  it("should display 'Hidden' when button is NOT clicked", async () => {
    render(() => <Router><Home /></Router>);
    const hiddenText = screen.getByText('Hidden');
    expect(hiddenText).toBeInTheDocument();

  });

  it("should display 'HELLO' when button is clicked", async () => {
    render(() => <Router><Home /></Router>);
    const hiddenText = screen.getByText('Hidden');
    expect(hiddenText).toBeInTheDocument();
    const button = screen.getByText('Show');
    fireEvent.click(button);
    const hello = screen.getByText('HELLO');
    expect(hello).toBeInTheDocument();

  });

  it("should display 'Motion One' when button is clicked", async () => {
    render(() => <Router><Home /></Router>);
    let motionText = screen.queryByText('Motion One');
    expect(motionText).not.toBeInTheDocument()
    const button = screen.getByText('Animate Box');
    fireEvent.click(button);
    motionText = screen.queryByText('Motion One');
    expect(motionText).toBeInTheDocument();

  });

})