import { describe, expect, it } from 'vitest';
import { render, screen } from 'solid-testing-library';
import { Router } from "@solidjs/router"

import About from './About';

describe('<About />', () => {

    it("should assert document title as expected", () => {
      render(() => <Router><About /></Router>);
      expect(document.title).toEqual("Solid - About")
  });



    it("should assert 'About Page' element exists.", () => {
      render(() => <Router><About /></Router>);
      const aboutpageText = screen.getByText('About Page');
      expect(aboutpageText).toBeInTheDocument();

	});


})