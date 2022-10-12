import { render ,screen} from "@testing-library/react"
import Async from "./Async"


describe("Async component",()=>{
  test("render component", async ()=>{

    // using jest mock test 

    jest.fn().mockReturnValueOnce({
        json: async () => [{id:'p1',title:'first post'}]
    });

    // Arrange
    render(<Async/>);

    // Assert
    const listELements = await screen.findAllByRole('listitem'); // findAllByRole is promise 
    expect(listELements).not.toHaveLength(0);

  });
})