using Microsoft.VisualStudio.TestTools.UnitTesting;
using EndPointApplication.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EndPointApplication.Controllers.Tests
{
    [TestClass()]
    public class DiffControllerTests
    {
        [TestMethod()]
        public void IndexTest()
        {
            // Arrange
            DiffController controller = new DiffController();

            // Act
            var result = controller.Index();

            // Assert
            Assert.IsNotNull(result);
        }

        [TestMethod()]
        public void leftTest()
        {
            // Arrange
            DiffController controller = new DiffController();

            // Act
            var result = controller.left("AAA");

            // Assert
            Assert.IsNotNull(result);
        }

        [TestMethod()]
        public void rightTest()
        {
            // Arrange
            DiffController controller = new DiffController();

            // Act
            var result = controller.right("XXX");

            // Assert
            Assert.IsNotNull(result);
        }
    }
}