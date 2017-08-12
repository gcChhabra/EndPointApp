using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EndPointApplication.Controllers
{
    public class DiffController : Controller
    {
        // GET: diff
        /// <summary>
        /// Gets the value for "left"
        /// 
        /// 11/08/2017
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        public ActionResult Index()
        {
            var compare = "Fill the left and right values";
            try
            {
                var LeftText = (Session["LeftText"] == null ? "" : Session["LeftText"].ToString());
                var RightText = (Session["RightText"] == null ? "" : Session["RightText"].ToString());
                if (LeftText.Length == 0)
                {
                    compare = "Set the Left Value";
                }
                else if (RightText.Length == 0)
                {
                    compare = "Set the Right Value";
                }
                else if (LeftText.ToString().Equals(RightText.ToString()))
                {
                    compare = "EQUAL";
                }
                else if (LeftText.ToString().Length.Equals(RightText.ToString().Length) && !LeftText.ToString().Equals(RightText.ToString()))
                {
                    compare = "SAME LENGTH BUT DIFFERENT CONTENT, leght: " + RightText.ToString().Length;
                }
                else if (!LeftText.ToString().Equals(RightText.ToString()))
                {
                    compare = "DIFFERENT";
                }
            }
            catch (Exception)
            {

                compare = "Fill the left and right values";
            }
            return Json(new { Compare = compare }, JsonRequestBehavior.AllowGet);
        }

        // GET: diff/leftEndPointData
        /// <summary>
        /// Sets the value for "left"
        /// 
        /// 11/08/2017
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        public ActionResult left(string text)
        {
            var result = "OK";
            try
            {
                Session["LeftText"] = text.Trim();
            }
            catch (Exception ex)
            {
                result = "Wrong Value provied";
            }
            return Json(new { result = result }, JsonRequestBehavior.AllowGet);
        }

        // GET: diff/rightEndPointData
        /// <summary>
        /// Sets the value for "right"
        /// 
        /// 11/08/2017
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        public ActionResult right(string text)
        {
            var result = "OK";
            try
            {
                Session["RightText"] = text.Trim();
            }
            catch (Exception ex)
            {

                result = "Wrong Value provied";
            }
            return Json(new { result = result }, JsonRequestBehavior.AllowGet);
        }


    }
}